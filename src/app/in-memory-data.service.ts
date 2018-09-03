import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Dad' },
      { id: 2, name: 'Isaac' },
      { id: 3, name: 'Marci' },
      { id: 4, name: 'Mom' },
      { id: 5, name: 'Zander' }
    ];
    return {users};
  }
}
