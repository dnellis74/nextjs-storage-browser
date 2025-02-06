import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "storage-browser-test",
  access: (allow: any) => ({
    'regulation/*': [allow.authenticated.to(['read'])]
  })
});
