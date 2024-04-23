import request from "supertest";
import { app } from "../src/app";
import dotEnv from "dotenv";
// import { afterEach, beforeEach, describe } from "node:test";
import { clearDatabase, closeDatabase, connect } from "./db-handler";
dotEnv.config();

beforeAll(connect);
afterAll(async () => clearDatabase);
afterAll(async () => closeDatabase);

describe("POST /sign-up", () => {
  it("when user name not provided", async () => {
    const res = await request(app).post("/sign-up").send();

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      message: "Please provide Name",
    });
  });
  it("when email not provided", async () => {
    const res = await request(app).post("/sign-up").send({
      name: "sample",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      message: "Please provide Email",
    });
  });

  it("it should create the user", async () => {
    const res = await request(app).post("/sign-up").send({
      name: "sample",
      email: "sample@gmail.com",
      password: "sample",
    });
    expect(res.statusCode).toBe(200);
  });
  it("it shoud throw error when trying to signup with same eamil", async () => {
    const res = await request(app).post("/sign-up").send({
      name: "sample",
      email: "sample@gmail.com",
      password: "sample",
    });
    expect(res.statusCode).toBe(403);
    expect(res.body.message).toBe("email already have an account");
  });
});

describe("POST sign-in", () => {
  


  it("it should throw error when email is not provided", async () => {
    const res = await request(app).post("/sign-in").send({});
    expect(res.statusCode).toBe(400)
    expect(res.body.message).toBe("Please provide Email")
  });

  it("it should throw error when password is not provided", async () => {
    const res = await request(app).post("/sign-in").send({
      email:"sample@gmail.com"
    });
    expect(res.statusCode).toBe(400)
    expect(res.body.message).toBe("Please provide Password")
  });

  it("it should throw error when invalid email provided", async () => {
    const res = await request(app).post("/sign-in").send({
      email:"random@gmail.com",
      password:"sample"
    });
    expect(res.statusCode).toBe(400)
    expect(res.body.message).toBe("user not found")
  });
  it("it should throw error when invalid password provided", async () => {
    const res = await request(app).post("/sign-in").send({
      email:"sample@gmail.com",
      password:"random"
    });
    expect(res.statusCode).toBe(400)
    expect(res.body.message).toBe("invalid password")
  });


  it("it should return user detail and login credintials",async() =>{
    const res = await request(app).post("/sign-in").send({
      email: "sample@gmail.com",
      password: "sample",
    });
    console.log(res.body)
    expect(res.statusCode).toBe(200)
    expect(res.body).toMatchObject({
      email:"sample@gmail.com",
      name:"sample"
    })
    
    expect(res.body).not.toMatchObject({
      password:'sample',
    })

  })

  
});
