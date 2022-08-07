import { BackGroundController } from "./Controllers/BackGroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodosController } from "./Controllers/ToDosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {

  weatherController = new WeatherController();
  quoteController = new QuoteController();
  backGroundController = new BackGroundController();
  todosController = new TodosController();
  timeController = new TimeController();
}

window["app"] = new App();
