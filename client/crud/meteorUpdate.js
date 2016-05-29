export function meteorUpdate(newSuccessNotification, newErrorNotification) {
  return store => next => action => {
    if (!action.meteor || !action.meteor.update) {
      return next(action);
    }

    const { collection, modifiers, id, options } = action.meteor.update;

    collection.update(id, modifiers, options, error => {
      if (error) {
        return store.dispatch(newErrorNotification());
      }

      store.dispatch(newSuccessNotification());
    });
  };
}