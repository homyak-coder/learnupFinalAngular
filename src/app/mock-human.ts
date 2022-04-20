import {Human} from "./human";

export const HUMANS: Human[] = []


for (let i = 0; i < 100; i++) {
  HUMANS.push({surname: 'Холодов', name: 'Даниил', patronymic: 'Алекандрович'})
}

console.log(HUMANS)


