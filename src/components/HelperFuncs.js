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

  const currentArrayKey = e.target.dataset.name;
  const newObjKey = e.target.dataset.section;
  const currentArray = this.state[currentArrayKey]
  let newArray = [];
  newArray = newArray.concat(this.state[newObjKey]);
  if(currentArray) {
    newArray = newArray.concat(currentArray);
  }
  console.log(newArray);
  
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
  const objHolder = this.state[objHolderKey];
  
  this.setState({
    display: 'form'
  })
}