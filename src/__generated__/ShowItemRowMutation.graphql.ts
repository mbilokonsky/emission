/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FollowShowInput = {
    readonly partnerShowID?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export type ShowItemRowMutationVariables = {
    readonly input: FollowShowInput;
};
export type ShowItemRowMutationResponse = {
    readonly followShow: {
        readonly show: {
            readonly slug: string;
            readonly internalID: string;
            readonly is_followed: boolean | null;
        } | null;
    } | null;
};
export type ShowItemRowMutation = {
    readonly response: ShowItemRowMutationResponse;
    readonly variables: ShowItemRowMutationVariables;
};



/*
mutation ShowItemRowMutation(
  $input: FollowShowInput!
) {
  followShow(input: $input) {
    show {
      slug
      internalID
      is_followed: isFollowed
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowShowInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": "is_followed",
  "name": "isFollowed",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ShowItemRowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowShowPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "show",
            "storageKey": null,
            "args": null,
            "concreteType": "Show",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShowItemRowMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowShowPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "show",
            "storageKey": null,
            "args": null,
            "concreteType": "Show",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ShowItemRowMutation",
    "id": "911a1269a5a33b71e9f3a4fac6edcc98",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '89791c55f4d66bcc372618b690e8ca2d';
export default node;
