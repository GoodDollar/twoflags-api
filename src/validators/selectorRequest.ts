/* eslint-disable no-constant-condition */
export function validateSelectorRequest(data: any) {
  if (data === undefined) data = null
  const validate: { errors: any } = { errors: null }
  validate.errors = null
  if (data !== undefined) {
    if (!(typeof data === 'object' && data && !Array.isArray(data))) {
      if (validate.errors === null) validate.errors = []
      validate.errors.push({ field: 'data', message: 'is the wrong type' })
    } else {
      var keys1 = Object.keys(data)
      for (var i = 0; i < keys1.length; i++) {
        if (
          keys1[i] !== 'id' &&
          keys1[i] !== 'op' &&
          keys1[i] !== 'label' &&
          keys1[i] !== 'value'
        ) {
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
      if (data.op !== undefined) {
        if (!(typeof data.op === 'string')) {
          if (validate.errors === null) validate.errors = []
          validate.errors.push({ field: 'data.op', message: 'is the wrong type' })
        } else {
          if (
            data.op !== 'push' &&
            data.op !== 'pop' &&
            data.op !== 'shift' &&
            data.op !== 'unshift'
          ) {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({ field: 'data.op', message: 'must be an enum value' })
          }
        }
      }
      if (data.label !== undefined) {
        if (!(typeof data.label === 'string')) {
          if (validate.errors === null) validate.errors = []
          validate.errors.push({ field: 'data.label', message: 'is the wrong type' })
        } else {
          if (data.label.length > 100) {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({
              field: 'data.label',
              message: 'has longer length than allowed'
            })
          }
        }
      }
      if (data.value !== undefined) {
        if (!(typeof data.value === 'string')) {
          if (validate.errors === null) validate.errors = []
          validate.errors.push({ field: 'data.value', message: 'is the wrong type' })
        } else {
          if (data.value.length > 100) {
            if (validate.errors === null) validate.errors = []
            validate.errors.push({
              field: 'data.value',
              message: 'has longer length than allowed'
            })
          }
        }
      }
    }
  }
  return validate
}
