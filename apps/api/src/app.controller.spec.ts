import { Test, type TestingModule } from "@nestjs/testing"

import { AppController } from "./app.controller.js"
import { AppService } from "./app.service.js"

describe("AppController", () => {
  let appController: AppController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = module.get<AppController>(AppController)
  })

  it('returns "Hello World!"', () => {
    expect(appController.getHello()).toBe("Hello World!")
  })
})
