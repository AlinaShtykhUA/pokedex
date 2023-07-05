const fetchImages = (context: __WebpackModuleApi.RequireContext) => {
  const images: Record<string, any> = {};
  const cache: Record<string, any> = {};

  function importAll(r: __WebpackModuleApi.RequireContext) {
    r.keys().forEach((key: string) => (cache[key] = r(key)));
  }

  importAll(context);

  Object.entries(cache).forEach((module: [string, any]) => {
    let key = module[0].split("");
    key.splice(0, 2);
    key.splice(-4, 4);
    images[key.join("")] = module[1];
  });

  return images;
};

export const images = fetchImages(
  require.context(
    "../assets/pokemons/shiny",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export const defaultImages = fetchImages(
  require.context(
    "../assets/pokemons/default",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
