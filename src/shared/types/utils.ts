export type OmitTyped<Obj extends object, Keys extends keyof Obj> = Omit<Obj, Keys>;

/**
 * Creates a string type with IDE autocomplete for known presets while strictly accepting values matching a template pattern.
 *
 * @template KnownValues - Union of preset strings for IDE autocomplete hints.
 * @template AllowedTemplate - Template literal type for strictly allowed custom values. Defaults to `string`.
 * @returns Intersection of `AllowedTemplate` and `{}` unioned with `KnownValues`. Preserves autocomplete without compromising type safety.
 *
 * @example
 * ```ts
 * const gaps = ['xs', 'sm', 'md'] as const;
 * type CustomGap = `${number}px`;
 *
 * // Hints: 'xs' | 'sm' | 'md'. Accepts: any `${number}px`. Rejects: everything else.
 * type Gap = HintedString<typeof gaps[number], CustomGap>;
 *
 * const a: Gap = 'xs';     // ✅ (preset hint)
 * const b: Gap = '16px';   // ✅ (template match)
 * const c: Gap = 'auto';   // ❌ (type error)
 * ```
 */
export type HintedString<KnownValues extends string, AllowedTemplate extends string = string> =
    | (AllowedTemplate & {})
    | KnownValues;

/**
 * @example
 * type UserId = Brand<string, "UserId">;
    type ProductId = Brand<string, "ProductId">;
 */
export type Brand<T, B> = T & { [brand]: B };
declare const brand: unique symbol;
