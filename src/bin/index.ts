#!/usr/bin/env node

import { Command, arguments } from "commander";
import { generate as generateApi } from "../gen-api"
import fs from "fs";

const program = new Command();

program
  .command('api | a')
  .arguments("<action>")
  .description('first init then generate')
  .action(async (type) => {
    if (type == 'init') {
      await fs.writeFileSync(`${process.cwd()}/api_config.json`,
        ` {
          "origin":"yapi.**.com",
          "token":"9d707841b4c53adbda3e679b3e9bab5f0bad8fdbcdea144507648b0a8ec0ef83",
          "api_id":80146,
          "types_dest":"/src/data/index.ts",
          "schema_name":"",
          "types_config":{"list_entity_name":"Channel"}
        }`)
      console.log('then you can run `api generate`');
    } else if (type == 'generate') {
      const config = require(`${process.cwd()}/api_config.json`)
      generateApi(config)
    }
  })

program.parse();
