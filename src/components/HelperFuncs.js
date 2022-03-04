import uniqid from 'uniqid';

export function handleChange(e) {
  const editObj = e.target.dataset.section;
  const editKey = e.target.dataset.field;
  const newValue = e.target.value;

  if(this.state.editIndex === 'none') {
    this.setState({
      [editObj]: {
        ...this.state[editObj],
        [editKey]:  newValue,
        baseID:     uniqid(),
      },
    })
  } else {
    this.setState({ 
      [editObj]: {
        ...this.state[editObj],
        [editKey]:  newValue,
      }
    }) 
  }
}

export function handleSubmit(e) {
  e.preventDefault();

  const currentArrayKey = e.target.dataset.name;
  const newObjKey = e.target.dataset.section;
  const currentArray = this.state[currentArrayKey]
  const currentIndex = this.state.editIndex;
  let newObj = this.state[newObjKey]
  let newArray = [];

  if(currentArray) {
    newArray = currentArray.concat(newArray);
  }

  if(currentIndex === 'none') {
    newObj.baseID = uniqid();
    newArray = newArray.concat(newObj);
  } else {
    newArray.splice(currentIndex, 1, newObj);
  }
  localStorage.setItem(currentArrayKey, JSON.stringify(newArray));
  console.log(localStorage);

  this.setState({
    [currentArrayKey]:  newArray,
    display: 'text',
    editIndex: 'none',
  })
};

export function handleAdd(e) {
  const resetObjKey = e.target.dataset.section;

  this.setState({
    [resetObjKey]: this.baseFormState,
    display: 'form',
    editIndex: 'none',
  })
}

export function handleEdit(e) {
  const objArrayKey = e.target.dataset.name;
  const objHolderKey = e.target.dataset.section;
  const objArray = this.state[objArrayKey];
  const objIndex = e.target.dataset.arrindex;
  const objToEdit = objArray[objIndex];
  
  this.setState({
    display: 'form',
    [objHolderKey]: objToEdit,
    editIndex: objIndex,
  })
}
export function removeLastVal(wholeArr) {
  wholeArr.pop();
  return wholeArr;
}

export function storeState(stateObj) {
  localStorage.setItem(this.state[0], JSON.stringify(stateObj));
  console.log(localStorage);
}
export function getStateFromStorage(stateObj) {
  if (localStorage.getItem(stateObj)) {
      let storedObj = JSON.parse(window.localStorage.getItem(stateObj));
      this.setState({
        stateObj: storedObj,
      })
      console.log(storedObj);
  }
}