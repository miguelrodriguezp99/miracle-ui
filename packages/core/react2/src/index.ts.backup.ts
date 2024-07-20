/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (
  __copyProps(target, mod, "default"),
  secondTarget && __copyProps(secondTarget, mod, "default")
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ResizablePanel: () => import_framer_utils.ResizablePanel,
  VisuallyHidden: () => import_visually_hidden.VisuallyHidden,
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("@mirakle-ui/system20"), module.exports);
__reExport(src_exports, require("@mirakle-ui/accordion"), module.exports);
__reExport(src_exports, require("@mirakle-ui/avatar"), module.exports);
__reExport(src_exports, require("@mirakle-ui/badge"), module.exports);
__reExport(src_exports, require("@mirakle-ui/button"), module.exports);
__reExport(src_exports, require("@mirakle-ui/checkbox"), module.exports);
__reExport(src_exports, require("@mirakle-ui/progress"), module.exports);
__reExport(src_exports, require("@mirakle-ui/input"), module.exports);
__reExport(src_exports, require("@mirakle-ui/dropdown"), module.exports);
__reExport(src_exports, require("@mirakle-ui/divider"), module.exports);
__reExport(src_exports, require("@mirakle-ui/ripple20"), module.exports);
__reExport(src_exports, require("@mirakle-ui/slider"), module.exports);
