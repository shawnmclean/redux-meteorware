export function meteorRemove(newSuccessNotification, newErrorNotification) {
  return store => next => action => {
    if (!action.meteor || !action.meteor.remove) {
      return next(action);
    }

    const { collection, id } = action.meteor.remove;

    collection.remove(id, error => {
      if (error) {
        return store.dispatch(newErrorNotification());
      }

      store.dispatch(newSuccessNotification());
    });
  };
}