export function meteorInsert(newSuccessNotification, newErrorNotification) {
  return store => next => action => {
    if (!action.meteor || !action.meteor.insert) {
      return next(action);
    }

    const { collection, entity } = action.meteor.insert;

    collection.insert(entity, error => {
      if (error) {
        return store.dispatch(newErrorNotification());
      }

      store.dispatch(newSuccessNotification());
    });
  };
}