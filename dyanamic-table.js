const config = {
  controlName: 'dyanamic-table',
  description: 'Editable Table for NAC',
  groupName: 'Presales Controls',
  fallbackDisableSubmit: false,
  standardProperties: {
    readOnly: false,
    required: false,
    description: true
  },
  version: '1.0',
  properties: {
    collection: {
      type: 'string',
      title: 'JSONData to be surfaced or displayed',
      default: JSON.stringify([
        {
          "Name": "Andy",
          "Company": "Nintex"
        },
        {
          "Name": "Dan",
          "Company": "Nintex"
        }
      ])
    },
    value: {
      type: 'string',
      title: 'updatedJson',
      isValueField: true
    }
  }
};

export { config };
