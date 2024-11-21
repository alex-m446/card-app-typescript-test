import { server } from "../src/server"
import Prisma from "../src/db";
import { Entry } from "@prisma/client";






describe("server test", () => {
  it("should assert 1 + 1 is 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

const testDate = new Date('2011-11-11T11:11:11');
const testDate2 = new Date('2012-11-11T11:11:11');
const testDate3 = new Date('2013-11-11T11:11:11');
const testDate4 = new Date('2014-11-11T11:11:11');

const build = require('../src/server')


describe("API tests", () => {
  const testId = Math.random()*(10**17);
  console.log(testId);
  const testEntry: Entry = {
    id: testId.toString(),
    title: "test title",
    description: "test description",
    created_at: testDate,
    scheduled: testDate2
  }

  const testEntryUpdate: Entry = {
    id: testId.toString(),
    title: "test title updated",
    description: "test description updated",
    created_at: testDate3,
    scheduled: testDate3
  }
  
  
  it("data entry test", async () => {
    const response = await server.inject()
    .post("/create/")
    .payload(testEntry)
    expect(response.payload).toEqual(JSON.stringify(testEntry));
  })

  it("data retrieval test", async () => {
    const response = await server.inject()
    .get(`/get/${testEntry.id}`)
    expect(response.payload).toEqual(JSON.stringify(testEntry));
  })

  it("data retrieval test 2", async () => {
    const response = await server.inject()
    .get(`/get/`)
    expect(response.payload).not.toEqual("[]");
  })

  it("data removal test", async () => {
    const response = await server.inject()
    .delete(`/delete/${testEntry.id}`)
    expect(response.payload).toEqual(JSON.stringify({"msg":"Deleted successfully"}));
  })
  
  it("data removal test 2", async () => {
    const response = await server.inject()
    .get(`/get/${testEntry.id}`)
    expect(response.payload).toEqual(JSON.stringify({"msg":`Error finding entry with id ${testEntry.id}`}));
  })

  it("data entry test 2", async () => {
    const response = await server.inject()
    .post("/create/")
    .payload(testEntry)
    expect(response.payload).toEqual(JSON.stringify(testEntry));
  })

  it("data update test", async () => {
    const response = await server.inject()
    .put(`/update/${testEntryUpdate.id}`)
    .payload(testEntryUpdate)
    expect(response.payload).toEqual(JSON.stringify({"msg":"Updated successfully"}));
  })

  it("data retrieval test 3", async () => {
    const response = await server.inject()
    .get(`/get/${testEntry.id}`)
    expect(response.payload).toEqual(JSON.stringify(testEntryUpdate));
  })



  
})