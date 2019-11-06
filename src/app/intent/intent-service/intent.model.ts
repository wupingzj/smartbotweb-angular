import { IntentResponse } from '../../response/model/intent-response.model';

export class Intent {
    name: string;
    phrases: string[];
    responses: IntentResponse[];
}
