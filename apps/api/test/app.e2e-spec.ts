import type { Server } from "node:http"
import { Test } from "@nestjs/testing"
import type { INestApplication } from "@nestjs/common"
import request from "supertest"

import { AppModule } from "../src/app.module.js"

describe("AppController (e2e)", () => {
  let app: INestApplication<Server>

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = module.createNestApplication<INestApplication<Server>>()
    await app.init()
  })

  it("GET /", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!")
  })

  afterEach(async () => {
    await app.close()
  })
})
