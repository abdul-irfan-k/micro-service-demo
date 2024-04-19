import mongoose from "mongoose";
import request from "supertest";
import { app } from "../src/app";
import dotEnv from "dotenv";
import { afterEach, beforeEach, describe } from "node:test";
dotEnv.config();

beforeEach(async () => {
  //@ts-ignore
  await mongoose.connect(process.env.TEST_DB_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /sign-up", () => {
  it("should create the user and return credintials", async () => {
    const res = await request(app).post("/sign-up").send({
      email: "sample@gmail.com",
      name: "x",
      userId: "x1",
      password: "password",
    });
    expect(res.statusCode).toBe(200);
  });
  it("should create the user and return credintials", async () => {
    const res = await request(app).get("/sign-in")
    expect(res.statusCode).toBe(200);
  });
});
