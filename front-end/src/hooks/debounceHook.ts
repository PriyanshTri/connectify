
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  waitFor: number
): (...args: Parameters<T>) => ReturnType<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (timeoutId!== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => callback(...args), waitFor);
    return callback(...args);
  };
}
