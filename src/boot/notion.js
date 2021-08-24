import { boot } from "quasar/wrappers";
import { Client } from "@notionhq/client";

const client = new Client({
  // 初始化notion
  auth: "secret_j367KNP7T9dkUFh6MQ9Fvuqw8QkL0Kut4pZthYrWZWg", // Secrets Key
});
const database_id = "9dc1f61e39f644df8613a11cc5450475"; // 数据库id
console.log(client);
const clientPages = () => {
  const create = async (text = '') => {
    return await client.pages.create({
      parent: { database_id },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
  };
  const retrieve = async () => {
    return await client.pages.retrieve({ database_id });
  };
  return { create, retrieve };
};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(() => {
  return { clientPages };
});
