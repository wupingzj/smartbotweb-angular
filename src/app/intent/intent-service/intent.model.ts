import { IntentResponse } from '../../response/model/intent-response.model';

export class Intent {
    name: string;
    phrases: string[];
    responses: IntentResponse[];

    constructor(name: string, phrases: string[], responses: IntentResponse[]) {
        this.name = name;
        this.phrases = phrases;
        this.responses = responses;
    }
}
