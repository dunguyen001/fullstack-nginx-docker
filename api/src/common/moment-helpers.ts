import moment from 'moment-timezone';

export const compareWithCurrent = (date: Date | string) => {
    try {
        return moment().diff(moment(new Date(date)), 'day') < 1;
    } catch (error) {
        throw error;
    }
}

export const compareWith = (dateA : Date | string, dateB: Date | string) => {
    try {
        return moment(dateA).diff(moment(new Date(dateB)), 'day') < 1;
    } catch (error) {
        throw error;
    }
}

export const startOfDate = (date: Date| string, unit: moment.unitOfTime.StartOf) => {
    try {
        return moment(date).startOf(unit).toDate();
    } catch (error) {
        throw error;
    }
}

export const endOfDate = (date: Date| string, unit: moment.unitOfTime.StartOf) => {
    try {
        return moment(date).endOf(unit).toDate();
    } catch (error) {
        throw error;
    }
}


// compareWithCurrent(new Date('2022-06-22'))