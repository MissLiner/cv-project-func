export function handleChange(e) {
    const editObj = e.target.dataset.section;
    const editKey = e.target.name;
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

  const arrayKey = e.target.name;
  const objKey = e.target.dataset.section;
  let newArray = [];
  newArray = newArray.concat(this.state[arrayKey]);
  newArray = newArray.concat(this.state[objKey]);
  console.log(this.state[objKey]);
  
  this.setState({
    [arrayKey]: newArray,
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

export function handleEdit() {
  if(this.state.isEditable === true) {
    this.setState({
      editable: false 
    })
  }
  else if(this.state.isEditable === false) {
    this.setState({
      editable: true 
    })
  }
}