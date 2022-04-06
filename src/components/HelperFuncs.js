import uniqid from 'uniqid';

export function handleToggle() {
  if(this.state.isOpen){
    this.setState({
      isOpen: false,
    })
  } else {
    this.setState({
      isOpen: true,
    })
  }
}

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

  this.setState({
    [currentArrayKey]:  newArray,
    display: 'text',
    editIndex: 'none',
  })
};

export function handleAdd(e) {
  e.preventDefault();
  const resetObjKey = e.target.dataset.section;

  this.setState({
    [resetObjKey]: this.baseFormState,
    display: 'form',
    editIndex: 'none',
  })
}

export function handleEdit(e) {
  e.preventDefault();
  const objArrayKey = e.target.dataset.name;//'genInfo'
  const objHolderKey = this.state.infoNameNew;//'newGenInfo'
  const objArray = this.state[objArrayKey];//state.genInfo
  const objIndex = e.target.dataset.arrindex;//index of existing object in info
  const objToEdit = objArray[objIndex];//info[index]
  
  this.setState({
    display: 'form',
    newInfo: info[],
    editIndex: objIndex,
  })
}
export function handleDelete(e) {
  e.preventDefault();
  const deleteArrKey = e.target.dataset.name;
  const deleteObjIndex = e.target.dataset.arrindex;
  let newArray = [];
  const deleteObjArr = this.state[deleteArrKey];
  newArray = newArray.concat(deleteObjArr);
  newArray.splice(deleteObjIndex, 1);

  this.setState({
    [deleteArrKey]: newArray,
  })
  localStorage.setItem(deleteArrKey, JSON.stringify(newArray));
}
export function handleCancel(e) {
  e.preventDefault();
  this.setState({
    display: 'text',
  })
}
export function removeLastVal(wholeArr) {
  wholeArr.pop();
  return wholeArr;
}