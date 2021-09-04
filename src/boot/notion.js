import { boot } from "quasar/wrappers";
import { Client } from "@notionhq/client";

const client = new Client({
  // 初始化notion
  auth: "secret_j367KNP7T9dkUFh6MQ9Fvuqw8QkL0Kut4pZthYrWZWg", // Secrets Key
});
const database_id = "9dc1f61e39f644df8613a11cc5450475"; // 数据库id

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(() => {
  console.log('notion API start')
});
