/* eslint-disable no-constant-condition */
export function validateNamespaceUpdate(data: any) {
  if (data === undefined) data = null
  const validate: { errors: any } = { errors: null }
  validate.errors = null
  if (data !== undefined) {
    if (!(typeof data === 'object' && data && !Array.isArray(data))) {
      if (validate.errors === null) validate.errors = []
      validate.errors.push({ field: 'data', message: 'is the wrong type' })
    } else {
      if (true) {
        var missing = 0
        if (data.id === undefined) {
          if (validate.errors === null) validate.errors = []
          validate.errors.push({ field: 'data.id', message: 'is required' })
          missing++
        }
      }
      if (missing === 0) {
        var keys1 = Object.keys(data)
        for (var i = 0; i < keys1.length; i++) {
          if (keys1[i] !== 'id' && keys1[i] !== 'name') {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({ field: 'data', message: 'has additional properties' })
          }
        }
        if (data.id !== undefined) {
          if (!(typeof data.id === 'string')) {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({ field: 'data.id', message: 'is the wrong type' })
          } else {
            if (data.id.length > 60) {
              if (validate.errors === null) validate.errors = []
              validate.errors.push({ field: 'data.id', message: 'has longer length than allowed' })
            }
          }
        }
        if (data.name !== undefined) {
          if (!(typeof data.name === 'string')) {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({ field: 'data.name', message: 'is the wrong type' })
          } else {
            if (data.name.length > 100) {
              if (validate.errors === null) validate.errors = []
              validate.errors.push({
                field: 'data.name',
                message: 'has longer length than allowed'
              })
            }
          }
        }
      }
    }
  }
  return validate
}
