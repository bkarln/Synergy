const useAppSettings = () => {
  let settings = {};
  settings['xgest_app_email'] = 'noreply@xgestapp.com';
  settings['xgest_base_url'] = 'https://cloud.xgestapp.com';
  return settings;
};

module.exports = useAppSettings;
