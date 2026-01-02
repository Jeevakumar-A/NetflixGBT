import OpenAI from 'openai';
import { openRouterAPIKey } from './constants';
// const openRouterAPIKey =process.env.REACT_APP_OPENROUTERAI_API_KEY;

const GPT_OpenAI = new OpenAI({
  apiKey: openRouterAPIKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // Allow usage in the browser (not recommended for production),
  baseURL: 'https://openrouter.ai/api/v1'
});


export default GPT_OpenAI

