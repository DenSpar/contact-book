let sortContacts = (srcContacts, rules) => {
    if (rules.how === 'incr') { //по возрастанию
      return srcContacts.sort((a, b) => (a[rules.by] < b[rules.by] && -1) || (a[rules.by] > b[rules.by] && 1) || 0);
    } else { //по убыванию
      return srcContacts.sort((a, b) => (a[rules.by] < b[rules.by] && 1) || (a[rules.by] > b[rules.by] && -1) || 0);
    };
};

export default sortContacts;