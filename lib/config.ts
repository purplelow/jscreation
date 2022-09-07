export const rootNotionPageID = "53462cd7b12d4f3fa3128640ccc0fc44";

export const previewImagesEnabled = true;

export const isDev =
  process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const port = process.env.PORT || 3000;
export const rootDomain = isDev ? `localhost:${port}` : null;
