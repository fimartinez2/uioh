function deepMerge<T extends object>(base: T, override?: Partial<T>): T {
  if (!override) return base;
  const out: any = Array.isArray(base)
    ? [...(base as any)]
    : { ...(base as any) };

  for (const key of Object.keys(override) as Array<keyof T>) {
    const baseVal = (base as any)[key];
    const overVal = (override as any)[key];

    if (
      baseVal &&
      overVal &&
      typeof baseVal === "object" &&
      typeof overVal === "object" &&
      !Array.isArray(baseVal) &&
      !Array.isArray(overVal)
    ) {
      out[key] = deepMerge(baseVal, overVal);
    } else if (overVal !== undefined) {
      out[key] = overVal;
    }
  }

  return out;
}
