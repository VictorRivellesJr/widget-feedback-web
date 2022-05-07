"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
app.use(body_parser_1.default.json({ limit: "5mb" }));
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!");
});
