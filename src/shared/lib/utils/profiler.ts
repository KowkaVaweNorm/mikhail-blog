import { ProfilerOnRenderCallback } from 'react';

export const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    const formatTime = (ms: number) => {
        if (ms < 1) return `${(ms * 1000).toFixed(0)}μs`;
        if (ms < 1000) return `${ms.toFixed(1)}ms`;
        return `${(ms / 1000).toFixed(2)}s`;
    };

    const bar = (duration: number) => {
        const len = Math.min(Math.floor(duration / 2.5), 20);
        const clr = duration > 50 ? '\x1b[31m' : duration > 30 ? '\x1b[33m' : '\x1b[32m';
        return `${clr}${'█'.repeat(len)}${'░'.repeat(20 - len)}\x1b[0m`;
    };

    const ratio = (actualDuration / baseDuration) * 100;

    console.group(`[${phase.toUpperCase()}] ${id}`);
    console.log(`  Время:       ${formatTime(actualDuration)} (база: ${formatTime(baseDuration)})`);
    console.log(`  Соотношение: ${ratio.toFixed(1)}% ${ratio > 100 ? '⚠️' : '✅'}`);
    console.log(`  Прогресс:    ${bar(actualDuration)}`);
    console.log(`  Начало:      ${new Date(startTime).toLocaleTimeString()}`);
    console.log(`  Коммит:      ${new Date(commitTime).toLocaleTimeString()}`);
    console.groupEnd();

    if (actualDuration > 50) {
        console.warn(`⚠️ ${id}: ${formatTime(actualDuration)}`);
    }
};
