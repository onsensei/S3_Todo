const boxTextInput = {
  backgroundColor: '#ffffff',
  color: '#000000',
  fontSize: 18,
  fontWeight: 'normal',
  borderColor: '#888888',
  borderWidth: 1,
  padding: 8,
  marginBottom: 10
};

export default {
  scrollContainer: {
    flex: 1
  },
  container: {
    padding: 8
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  singleLineTextInput: {
    ...boxTextInput
  },
  multiLineTextInput: {
    ...boxTextInput,
    height: 120
  },
  datePicker: {
    width: '100%'
  },
  datePickerIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0
  },
  datePickerInput: {
    marginLeft: 36
  }
};
