const Index = () => {
  return (
    <>
      <h1>Gastap</h1>
      <fieldset>
        <label for='switch'></label>
        <input type='checkbox' id='switch' name='switch' role='switch' />
        <label for='switch_disabled'> </label>
        <input
          type='checkbox'
          id='switch_disabled'
          name='switch_disabled'
          role='switch_disabled'
          disabled
          checked
        />
      </fieldset>
    </>
  )
}

export default Index
