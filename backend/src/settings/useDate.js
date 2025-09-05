const useDate = ({ settings }) => {
  const { xgest_app_date_format } = settings;

  const dateFormat = xgest_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
