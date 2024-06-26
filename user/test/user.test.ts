import request from "supertest";
import { app } from "../src/app";
import dotEnv from "dotenv";
import { clearDatabase, closeDatabase, connect } from "./db-handler";
import { describe } from "node:test";
import { v4 as uuidV4 } from "uuid";
dotEnv.config();

beforeAll(connect);
afterAll(clearDatabase);
afterAll(closeDatabase);

let userId: string | undefined = uuidV4();
describe("POST user/", () => {
  it("it should create the user ", async () => {
    const res = await request(app).post("/").send({
      name: "sample",
      email: "sample@gmail.com",
      password: "sample",
      _id: userId,
    });
    userId = res.body._id;
    expect(res.body._id).not.toBeNull();
    expect(res.body.name).not.toBeNull();
    expect(res.body.email).not.toBeNull();
  });
});
describe("GET user/", () => {
  it("it should throw error when userId params is not passed", async () => {
    const res = await request(app).get("/sample");
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("User not found");
  });

  it("it should throw error when invalid userId provided", async () => {
    const res = await request(app).get("");
  });

  it("it should return the user details", async () => {
    const res = await request(app).get(`/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(userId);
    expect(res.body.name).not.toBeNull();
    expect(res.body.email).not.toBeNull();
    expect(res.body.password).toBeUndefined();
  });
});

describe("PUT user/", () => {
  it("it should throw error when userId not provided", async () => {
    const res = await request(app).put("/").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("Please provide userId");
  });
  it("it should update the user details", async () => {
    const res = await request(app).put("/").send({
      userId,
      name: "randomName",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toEqual("randomName");
  });
});

describe("POST seating-preference/", () => {
  it("it should throw error when userId is not  provided ", async () => {
    const res = await request(app).post("/seating-preference").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("Please provide userId");
  });

  it("it should throw error when invalid userId passed", async () => {
    const res = await request(app)
      .post("/seating-preference")
      .send({ userId: "sample" });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("Invalid userId");
  });
  it("it should throw error when seat deatils is not provided", async () => {
    const res = await request(app).post("/seating-preference").send({ userId });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("Please provide seat details");
  });

  it("it should save the seating-preference details ", async () => {
    const res = await request(app)
      .post("/seating-preference")
      .send({
        userId,
        seat: {
          preferedSeatType: "window",
          preferedLocation: "front",
        },
      });
    expect(res.statusCode).toBe(200);
    expect(res.body._id).not.toBeUndefined();
    expect(res.body.userId).toEqual(userId);
  });
});

describe("GET seating-preference/", () => {
  it("it should throw eror when userId param is not provided", async () => {
    const res = await request(app).get("/seating-preference");
    expect(res.statusCode).toBe(400);
  });

  it("it should return the seating preference deatils", async () => {
    const res = await request(app).get(`/seating-preference/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).not.toBeNull();
    expect(res.body.userId).not.toBeNull();
    expect(res.body.seat).not.toBeNull();
  });
});

describe("Put seating-preference/", () => {
  it("it should throw eror when userId  is not provided", async () => {
    const res = await request(app).put("/seating-preference").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual("Please provide userId");
  });

  it("it shoudl update the seating preference ", async () => {
    const res = await await request(app)
      .put("/seating-preference")
      .send({
        userId,
        seat: { preferedSeatType: "asile", preferedLocation: "front" },
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.seat).toMatchObject({
      preferedSeatType: "asile",
      preferedLocation: "front",
    });
  });
});
