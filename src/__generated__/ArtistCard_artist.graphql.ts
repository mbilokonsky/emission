/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ArtistCard_artist$ref: unique symbol;
export type ArtistCard_artist$ref = typeof _ArtistCard_artist$ref;
export type ArtistCard_artist = {
    readonly slug: string;
    readonly internalID: string;
    readonly href: string | null;
    readonly name: string | null;
    readonly formatted_artworks_count: string | null;
    readonly formatted_nationality_and_birthday: string | null;
    readonly image: {
        readonly url: string | null;
    } | null;
    readonly " $refType": ArtistCard_artist$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ArtistCard_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "internalID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "formatted_artworks_count",
      "name": "formattedArtworksCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "formatted_nationality_and_birthday",
      "name": "formattedNationalityAndBirthday",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large"
            }
          ],
          "storageKey": "url(version:\"large\")"
        }
      ]
    }
  ]
};
(node as any).hash = 'b658cceb13f604f2ab22caaaaacf499a';
export default node;
