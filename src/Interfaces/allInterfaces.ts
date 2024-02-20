type Status = 'ativo' | 'arquivado'

interface Processo {
    nprocesso: number,
    cliente: string,
    alvoProcesso: string,
    zuluDate: string
    status: Status
}

export {
    Processo,
    Status
}