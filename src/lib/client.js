import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '8csevbsr',
    dataset: 'production',
    apiVersion: '2022-12-21',
    useCdn: true,
    token: process.env.REACT_PUBLIC_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}