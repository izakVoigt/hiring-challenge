import dotenv from 'dotenv';

export const loadAndValidateEnvVariables = () => {
  const envConfig = dotenv.config({ path: '.env' });

  if (envConfig.error) {
    throw new Error('Failed to load .env file');
  }

  const envVariables = envConfig.parsed;
  const requiredEnvVariables = ['API_PORT', 'MONGODB_URI'];

  if (!envVariables || Object.keys(envVariables).length === 0) {
    throw new Error('No environment variables found');
  }

  const missingVariables = Object.keys(envVariables).filter((variable) => !envVariables[variable]);
  const missingRequiredVariables = requiredEnvVariables.filter(
    (variable) => !Object.keys(envVariables).includes(variable),
  );

  if (missingVariables.length > 0) {
    throw new Error(`Missing environment variables value: ${missingVariables.join(', ')}`);
  }
  if (missingRequiredVariables.length > 0) {
    throw new Error(`Missing required environment variables: ${missingRequiredVariables.join(', ')}`);
  }

  Object.assign(process.env, envVariables);

  return envVariables;
};
