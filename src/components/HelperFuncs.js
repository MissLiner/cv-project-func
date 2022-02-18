export function handleChange(e) {
  const editObj = e.target.dataset.section;
  const editKey = e.target.dataset.field;
  const newValue = e.target.value;

  this.setState({
    [editObj]: {
      ...this.state[editObj],
      [editKey]: newValue,
    }
  })
}

export function handleSubmit(e) {
  e.preventDefault();
//also fix addNew to change index back to ''
  const currentArrayKey = e.target.dataset.name;
  const newObjKey = e.target.dataset.section;
  const currentArray = this.state[currentArrayKey]
  const currentIndex = this.state.editIndex;
  const newObj = this.state[newObjKey]

  let newArray = [];
  if(currentArray) {
    newArray = currentArray.concat(newArray);
  }
  if(currentIndex === '') {
    newArray = newArray.concat(newObj);
  } else {
    newArray.splice(currentIndex, 1, newObj);
  }
  this.setState({
    [currentArrayKey]: newArray,
  })


  
  this.setState({
    [currentArrayKey]: newArray,
    display: "text",
  })
};

export function handleAdd(e) {
  const resetObjKey = e.target.dataset.section;

  this.setState({
    [resetObjKey]: this.baseFormState,
    display: 'form',
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