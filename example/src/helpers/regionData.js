const COUNTRYS = [
  {
    id: 1,
    name: '中国',
    code: '086'
  }
]

const STATES = [
  {
    parentId: 1,
    id: 2,
    name: '北京市',
    code: '110000'
  },

  {
    id: 3,
    name: '山西省',
    code: '140000'
  }
]

const CITIES = [
  {
    parentId: 2,
    id: 4,
    name: '北京市',
    code: '110100'
  },

  {
    parentId: 3,
    id: 5,
    name: '太原市',
    code: '140100'
  }
]

const DISTRICTS = [
  {
    parentId: 4,
    id: 6,
    name: '东城区',
    code: '110101'
  },
  {
    parentId: 4,
    id: 7,
    name: '西城区',
    code: '110102'
  },
  {
    parentId: 4,
    id: 8,
    name: '朝阳区',
    code: '110105'
  },
  {
    parentId: 4,
    id: 9,
    name: '丰台区',
    code: '110106'
  },
  {
    parentId: 4,
    id: 10,
    name: '石景山区',
    code: '110107'
  },
  {
    parentId: 5,
    id: 11,
    name: '小店区',
    code: '140105'
  },
  {
    parentId: 5,
    id: 12,
    name: '迎泽区',
    code: '140106'
  },
  {
    parentId: 5,
    id: 13,
    name: '杏花岭区',
    code: '140107'
  },
  {
    parentId: 5,
    id: 14,
    name: '尖草坪区',
    code: '140108'
  },
  {
    parentId: 5,
    id: 15,
    name: '万柏林区',
    code: '140109'
  }
]

export function fetchRegions(type, parentId) {
  if (type === 'country') {
    return delayResolve(COUNTRYS, 500)
  }

  if (type === 'state') {
    return delayResolve(STATES.filter(s => s.parentId === parentId), 600)
  }

  if (type === 'city') {
    return delayResolve(CITIES.filter(s => s.parentId === parentId), 600)
  }

  if (type === 'district') {
    return delayResolve(DISTRICTS.filter(s => s.parentId === parentId), 600)
  }
}

function delayResolve(data, timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}