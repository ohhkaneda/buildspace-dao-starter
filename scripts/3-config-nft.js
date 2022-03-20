import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7e066B8085E816208E15f0bB728d4c8CCa92Ad53",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Dark Hedron Stone",
        description: "This NFT will give you access to DarkHedronDAO!",
        image: readFileSync("scripts/assets/DarkHedronStone.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()