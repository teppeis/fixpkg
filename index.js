#!/usr/bin/env node

import npmCliPkgJson from "@npmcli/package-json";

const pkg = await npmCliPkgJson.load(process.cwd());
await pkg.fix();
await pkg.save({ sort: true });
