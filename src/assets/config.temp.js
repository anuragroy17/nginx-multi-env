// This file will have the mappings and envsubst will replace the config.js with the mapped environment variables
__config = {
  apiUrl: '${API_URL}' || 'local_url',
  environment: '${ENV}' || 'local',
};
