// Takes a relative path and returns an absolute path URL.
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
}