/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ArtistListItem_artist$ref } from "./ArtistListItem_artist.graphql";
declare const _AboutArtist_artwork$ref: unique symbol;
export type AboutArtist_artwork$ref = typeof _AboutArtist_artwork$ref;
export type AboutArtist_artwork = {
    readonly artists: ReadonlyArray<{
        readonly id: string;
        readonly biography_blurb: {
            readonly text: string | null;
        } | null;
        readonly " $fragmentRefs": ArtistListItem_artist$ref;
    } | null> | null;
    readonly " $refType": AboutArtist_artwork$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AboutArtist_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": "biography_blurb",
          "name": "biographyBlurb",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistBlurb",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "text",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "ArtistListItem_artist",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '7192b5741db2f031a7916f7289488406';
export default node;
