import type { IMagickImage } from "../../deps.ts";
import type { Page } from "lume/core.ts";

export function imagick(page: Page) {
  const url = page.data.url as string;

  return {
    [url](image: IMagickImage) {
      image.resize(100, 100);
    },
  };
}
